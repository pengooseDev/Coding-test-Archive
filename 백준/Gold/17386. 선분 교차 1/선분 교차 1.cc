#include <iostream>
using namespace std;

int ccw(long long x1, long long y1, long long x2, long long y2, long long x3, long long y3)
{
  long long res = (long long)(x1 * y2) + (long long)(x2 * y3) + (long long)(x3 * y1) - (long long)(y1 * x2) - (long long)(y2 * x3) - (long long)(y3 * x1);

  if (res > 0)
    return 1;

  if (res < 0)
    return -1;

  return 0;
}

int main()
{
  long long x1, y1, x2, y2, x3, y3, x4, y4;
  cin >> x1 >> y1 >> x2 >> y2 >> x3 >> y3 >> x4 >> y4;

  long long ccw1 = (long long)ccw(x1, y1, x2, y2, x3, y3) * (long long)ccw(x1, y1, x2, y2, x4, y4);
  long long ccw2 = (long long)ccw(x3, y3, x4, y4, x1, y1) * (long long)ccw(x3, y3, x4, y4, x2, y2);

  if (ccw1 <= 0 && ccw2 <= 0)
    cout << 1 << endl;
  else
    cout << 0 << endl;

  return 0;
}
