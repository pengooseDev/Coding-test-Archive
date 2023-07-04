#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
  int N;
  cin >> N;

  vector<int> req(N);

  for (int i = 0; i < N; i++)
    cin >> req[i];

  int buget;
  cin >> buget;

  int low = 1, high = *max_element(req.begin(), req.end());
  int answer = 0;

  while (low <= high)
  {
    int mid = (low + high) / 2;
    int sum = 0;

    for (int i : req)
      sum += min(i, mid);

    if (sum <= buget)
    {
      answer = mid;
      low = mid + 1;
    }
    else
      high = mid - 1;
  }

  cout << answer << endl;

  return 0;
}