#include <iostream>

using namespace std;

int main()
{
  int A, B, C;
  cin >> A >> B >> C;

  int D;
  cin >> D;

  int curr = A * 3600 + B * 60 + C;
  int finish = curr + D;

  int h = (finish / 3600) % 24;
  int m = (finish % 3600) / 60;
  int s = (finish % 60);

  cout << h << " " << m << " " << s;

  return 0;
}
