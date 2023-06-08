#include <iostream>
#include <queue>
using namespace std;

int main()
{
  ios::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  int N;
  cin >> N;

  priority_queue<int> pq;

  for (int i = 0; i < N; i++)
  {
    // 0이면 최대값을 출력 후 삭제. 비어있으면 0 출력;
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