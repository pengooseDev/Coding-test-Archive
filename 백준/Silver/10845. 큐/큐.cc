#include <iostream>
#include <queue>
#include <string>
using namespace std;

int main()
{
  ios::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  int N;
  cin >> N;

  queue<int> q;

  for (int i = 0; i < N; i++)
  {
    string command;
    cin >> command;

    if (command == "push")
    {
      int value;
      cin >> value;
      q.push(value);
      continue;
    }

    if (command == "pop")
    {
      int res;
      if (q.empty())
        cout << "-1"
             << "\n";
      else
      {
        cout << q.front() << "\n";
        q.pop();
      }

      continue;
    }

    if (command == "size")
    {
      cout << q.size() << "\n";
      continue;
    }

    if (command == "empty")
    {
      cout << q.empty() << "\n";
      continue;
    }

    if (command == "front")
    {
      if (q.empty())
      {
        cout << "-1"
             << "\n";
        continue;
      }

      cout << q.front() << "\n";
      continue;
    }

    if (command == "back")
    {
      if (q.empty())
      {
        cout << "-1"
             << "\n";
        continue;
      }

      cout << q.back() << "\n";
      continue;
    }
  }

  return 0;
}