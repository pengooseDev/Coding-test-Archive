#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

const int INF = 1e9 + 7;

pair<int, int> cq(vector<int> &arr, vector<pair<int, int>> &tree, int node, int start, int end)
{
  if (start == end)
    return tree[node] = {arr[start], arr[start]};

  int mid = (start + end) / 2;

  pair<int, int> l = cq(arr, tree, node * 2, start, mid);
  pair<int, int> r = cq(arr, tree, node * 2 + 1, mid + 1, end);

  return tree[node] = {min(l.first, r.first), max(l.second, r.second)};
}

pair<int, int> q(vector<pair<int, int>> &tree, int node, int start, int end, int l, int r)
{
  if (l > end || r < start)
    return {INF, -INF};

  if (l <= start && end <= r)
    return tree[node];

  int mid = (start + end) / 2;
  pair<int, int> lq = q(tree, node * 2, start, mid, l, r);
  pair<int, int> rq = q(tree, node * 2 + 1, mid + 1, end, l, r);
  return {min(lq.first, rq.first), max(lq.second, rq.second)};
}

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  
  int N, M;
  cin >> N >> M;

  vector<int> arr(N + 1);
  for (int i = 1; i <= N; ++i)
    cin >> arr[i];

  int size = 1;
  while (size < N)
    size *= 2;
  size = size * 2 - 1;

  vector<pair<int, int>> seg(size, {INF, -INF});

  cq(arr, seg, 1, 1, N);

  for (int i = 0; i < M; ++i)
  {
    int a, b;
    cin >> a >> b;

    pair<int, int> res = q(seg, 1, 1, N, a, b);
    cout << res.first << " " << res.second << "\n";
  }

  return 0;
}
