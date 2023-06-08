#include <iostream>
#include <vector>
using namespace std;

int main()
{
  int N, K;
  cin >> N >> K;

  vector<bool> isPrime(N + 1, true);
  int count = 0;

  for (int i = 2; i <= N; i++)
  {
    if (isPrime[i])
    {
      count++;
      if (count == K)
      {
        cout << i << endl;
        break;
      }
      for (int j = i * 2; j <= N; j += i)
      {
        if (isPrime[j])
        {
          count++;
          if (count == K)
          {
            cout << j << endl;
            break;
          }
          isPrime[j] = false;
        }
      }
    }
  }

  return 0;
}
