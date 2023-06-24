#include <iostream>
#include <unordered_map>
using namespace std;

int main()
{
  while (true)
  {
    long long N, a, b;
    cin >> N;

    if (N == 0)
      break;

    cin >> a >> b;

    unordered_map<long long, int> my_map;
    long long x = 0;
    long long s = 0;
    long long cnt = 0;

    while (true)
    {
      s++;
      x = ((a * (x * x % N) + b) % N);
      my_map[x]++;

      if (my_map[x] == 2)
        cnt++;

      if (my_map[x] == 3)
        break;
    }

    cout << (N - cnt) << endl;
  }

  return 0;
}
