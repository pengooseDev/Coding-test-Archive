#include <iostream>
#include <vector>
using namespace std;

void star(int n, int x, int y, vector<vector<char>> &m)
{
  if (n == 3)
  {
    m[y][x] = '*';
    m[y + 1][x - 1] = m[y + 1][x + 1] = '*';
    for (int i = -2; i <= 2; i++)
      m[y + 2][x + i] = '*';
    return;
  }
  star(n / 2, x, y, m);
  star(n / 2, x - n / 2, y + n / 2, m);
  star(n / 2, x + n / 2, y + n / 2, m);
}

int main()
{
  int N;
  cin >> N;

  vector<vector<char>> map(N, vector<char>(2 * N - 1, ' '));

  star(N, N - 1, 0, map);
  for (int i = 0; i < N; i++)
  {
    for (int j = 0; j < 2 * N - 1; j++)
      cout << map[i][j];
    cout << "\n";
  }
  return 0;
}
