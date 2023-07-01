#include <iostream>
using namespace std;

int main()
{
  long long N;
  cin >> N;

  long long sum = 0, wc = 0;

  for (long long i = 0; i < N; i++)
  {
    long long s;
    cin >> s;
    sum ^= s;

    if ((s & (s + 1)) != 0)
      wc++;
  }

  bool k_win;

  if (sum != 0)
    k_win = true;
  else
    ((wc % 2 == 0) || wc == N) ? k_win = false : k_win = true;

  if (k_win)
    cout << "koosaga" << endl;
  else
    cout << "cubelover" << endl;

  return 0;
}