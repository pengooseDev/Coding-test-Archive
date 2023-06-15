#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

struct Point
{
  int x;
  int y;
};

bool cmp(Point a, Point b)
{
  if (a.y == b.y)
    return a.x < b.x;

  return a.y < b.y;
}

int main()
{
  int n;
  cin >> n;

  vector<Point> v;

  for (int i = 0; i < n; i++)
  {
    int x, y;
    cin >> x >> y;

    Point point = {x, y};
    v.push_back(point);
  }

  sort(v.begin(), v.end(), cmp);

  for (Point i : v)
    cout << i.x << " " << i.y << "\n";

  return 0;
}