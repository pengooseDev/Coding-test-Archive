#include <iostream>
#include <queue>

using namespace std;

int main()
{
  int n;
  cin >> n;

  priority_queue<int> plus;
  priority_queue<int, vector<int>, greater<int>> minus;

  int one = 0;
  int zero = 0;
  long long sum = 0;

  for (int i = 0; i < n; ++i)
  {
    int x;
    cin >> x;

    if (x > 1)
      plus.push(x);
    else if (x == 1)
      one++;
    else
    {
      minus.push(x);
      if (x == 0)
        zero++;
    }
  }

  // 양수 처리
  while (plus.size() >= 2)
  {
    int a = plus.top();
    plus.pop();
    int b = plus.top();
    plus.pop();
    sum += a * b;
  }
  if (!plus.empty())
    sum += plus.top();

  // 음수 & 0 처리
  while (minus.size() >= 2)
  {
    int a = minus.top();
    minus.pop();
    int b = minus.top();
    minus.pop();
    sum += a * b;
  }
  if (!minus.empty() && minus.top() < 0 && zero == 0)
    sum += minus.top();

  // 1 처리
  sum += one;

  cout << sum << endl;

  return 0;
}
