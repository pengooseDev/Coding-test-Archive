#include <iostream>
#include <queue>
using namespace std;

int main()
{
  ios::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  int N, K;
  cin >> N >> K;

  queue<int> q;
  for (int i = 1; i <= N; i++)
    q.push(i);

  cout << "<";

  while (!q.empty())
  {
    for (int i = 1; i < K; i++)
    {
      int front = q.front();
      q.pop();
      q.push(front);
    }

    cout << q.front();
    q.pop();

    if (!q.empty())
      cout << ", ";
  }

  cout << ">" << endl;

  return 0;
}

/*
4 5 6 7 1 2 3


*/