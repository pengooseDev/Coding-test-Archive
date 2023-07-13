#include <iostream>
using namespace std;

bool hansu(int n)
{
  if (n < 100)
    return true;

  if ((n / 100) - ((n % 100) / 10) == ((n % 100) / 10) - (n % 10))
    return true;

  return false;
}

int main()
{
  int n, answer = 0;
  cin >> n;

  for (int i = 1; i <= n; i++)
    if (hansu(i))
      answer++;

  cout << answer;
  return 0;
}
