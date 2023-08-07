#include <iostream>
#include <vector>
using namespace std;

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);

  int N, M, Q;
  cin >> N >> M >> Q;

  vector<int> row(N, 0);
  vector<int> column(M, 0);
  vector<int> rowSum(N, 0);
  vector<int> colSum(M, 0);

  for (int i = 0; i < Q; i++)
  {
    int type, index, v;
    cin >> type >> index >> v;

    if (type == 1)
      row[index - 1] += v;
    else
      column[index - 1] += v;
  }

  rowSum[0] = row[0];
  for (int i = 1; i < N; i++)
    rowSum[i] = rowSum[i - 1] + row[i];

  colSum[0] = column[0];
  for (int i = 1; i < M; i++)
    colSum[i] = colSum[i - 1] + column[i];

  for (int i = 0; i < N; i++)
  {
    for (int j = 0; j < M; j++)
      cout << (i == 0 ? row[i] : rowSum[i] - rowSum[i - 1]) + (j == 0 ? column[j] : colSum[j] - colSum[j - 1]) << " ";

    cout << '\n';
  }

  return 0;
}
