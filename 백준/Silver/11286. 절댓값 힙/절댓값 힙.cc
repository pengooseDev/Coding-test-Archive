#include <iostream>
#include <queue>
using namespace std;

int myComp(int a, int b)
{
  return abs(a) < abs(b);
};

int main()
{
  ios::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  auto myComp = [](const int &a, const int &b)
  {
    if (abs(a) == abs(b))
    {
      return a > b;
    }

    return abs(a) > abs(b);
  };

  int N;
  cin >> N;

  priority_queue<int, vector<int>, decltype(myComp)> pq(myComp);

  for (int i = 0; i < N; i++)
  {
    int curr;
    cin >> curr;

    if (curr == 0)
    {
      if (pq.empty())
        cout << 0 << "\n";
      else
      {
        cout << pq.top() << "\n";
        pq.pop();
      }
    }
    else
      pq.emplace(curr);
  }

  return 0;
}