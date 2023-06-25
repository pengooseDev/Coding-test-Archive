#include <iostream>
#include <vector>
#include <queue>
using namespace std;

const int MAX = 100000;

int main()
{
  int N, K;
  cin >> N >> K;

  vector<int> t(MAX + 1, -1);
  vector<int> route(MAX + 1, 0);
  queue<int> q;
  q.push(N);
  t[N] = 0;
  route[N] = 1;

  while (!q.empty())
  {
    int curr = q.front();
    q.pop();

    for (int next : {curr - 1, curr + 1, 2 * curr})
    {
      if (next < 0 || next > MAX)
        continue;

      if (t[next] == -1)
      {
        q.push(next);
        t[next] = t[curr] + 1;
        route[next] = route[curr];
      }
      else if (t[next] == t[curr] + 1)
        route[next] += route[curr];
    }
  }

  cout << t[K] << "\n" << route[K] << "\n";

  return 0;
}
