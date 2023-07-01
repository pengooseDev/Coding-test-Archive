#include <iostream>
using namespace std;

int grundy(int P)
{
  if (P % 4 == 0)
    return P - 1;
  else if (P % 4 == 3)
    return P + 1;
  else
    return P;
}

int main()
{
  int N;
  cin >> N;

  int sum = 0;

  for (int i = 0; i < N; i++)
  {
    int P;
    cin >> P;
    sum ^= grundy(P);
  }

  sum != 0 ? cout << "koosaga" << endl : cout << "cubelover" << endl;

  return 0;
}
