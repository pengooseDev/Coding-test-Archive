#include <iostream>
#include <queue>

using namespace std;

int main()
{
  int N, T;
  cin >> N;

  for (int i = 0; i < N; i++)
  {
    priority_queue<int, vector<int>, greater<int>> right;
    priority_queue<int> left;

    cin >> T;
    vector<int> v;
    for (int j = 1; j <= T; j++)
    {
      int curr;
      cin >> curr;

      if (left.size() == right.size())
      {
        // size 같은 경우.
        /*
          left 넣는 경우.
          1. left 비어있으면 일단 left로 넣기. 최소값임. (첫 값 처리)
          2. right의 top보다 curr이 크면 right 값 left로 옮기고, curr right 넣기.
        */
        if (!right.empty() && right.top() < curr)
        {
          left.push(right.top());
          right.pop();
          right.push(curr);
        }
        else
          left.push(curr);
      }
      else
      {
        if (!left.empty() && left.top() > curr)
        {
          right.push(left.top());
          left.pop();
          left.push(curr);
        }
        else
          right.push(curr);
      }

      if (j % 2 == 1)
        v.push_back(left.top());
    }

    cout << v.size() << "\n";
    for (int k = 0; k < v.size(); k++)
    {
      cout << v[k];

      if ((k + 1) % 10 == 0 || k == v.size() - 1)
      {
        cout << "\n";
      }
      else
      {
        cout << " ";
      }
    }
  }

  return 0;
}
