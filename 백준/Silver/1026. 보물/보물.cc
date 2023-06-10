#include <iostream>
#include <queue>
using namespace std;

int main()
{
  int n, tmp, answer = 0;
  cin >> n;

  priority_queue<int, vector<int>, greater<int>> a;
  priority_queue<int> b;

  for (int i = 0; i < n; i++)
  {
    cin >> tmp;
    a.push(tmp);
  }

  for (int i = 0; i < n; i++)
  {
    cin >> tmp;
    b.push(tmp);
  }

  for (int i = 0; i < n; i++)
  {
    int curr;
    curr = a.top() * b.top();
    a.pop();
    b.pop();
    answer += curr;
  }

  cout << answer;

  return 0;
}
