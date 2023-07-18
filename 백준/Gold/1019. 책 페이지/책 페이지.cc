#include <iostream>
#include <vector>

using namespace std;

int main()
{
  long long N;
  cin >> N;

  vector<long long> pages(10, 0);

  for (long long i = 1; i <= N; i *= 10)
  {
    long long q = N / (i * 10);
    long long r = N % (i * 10);

    for (int j = 0; j < 10; j++)
      pages[j] += q * i;

    for (int j = 1; j < r / i; j++)
      pages[j] += i;

    if (r / i > 0)
      pages[r / i] += r % i + 1;
    else
      pages[0] += r % i - i + 1;
  }

  for (int i = 0; i < 10; i++)
    cout << pages[i] << ' ';

  cout << endl;

  return 0;
}
