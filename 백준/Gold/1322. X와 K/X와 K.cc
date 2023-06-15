#include <iostream>
#include <vector>
using namespace std;

int main()
{
  unsigned long long X, K;
  cin >> X >> K;

  unsigned long long bit = 1;
  unsigned long long Y = 0;
  unsigned long long remain = K;

  for (int i = 0; i < 64; i++)
  {
    if (!(X & bit))
    {
      if (remain & 1)
        Y |= bit;

      remain >>= 1;
    }

    bit <<= 1;
  }

  cout << Y << endl;

  return 0;
}