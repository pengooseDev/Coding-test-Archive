#include <iostream>
#include <vector>
using namespace std;

void leaf_checker(vector<bool> &v, vector<vector<int>> &g, int node)
{
  v[node] = true;
  for (int i : g[node])
    leaf_checker(v, g, i);
}

int dfs(vector<bool> &v, vector<vector<int>> &g, int node)
{
  if (v[node])
    return 0;

  int child = 0;
  int leafs = 0;

  for (int i : g[node])
  {
    child++;
    leafs += dfs(v, g, i);
  }

  if (child == 1 && v[g[node][0]])
    return 1;

  return leafs > 0 ? leafs : (child == 0 ? 1 : 0);
}

int main()
{
  int n;
  cin >> n;
  vector<vector<int>> graph(n);
  vector<bool> visited(n, false);

  int root = -1;
  for (int i = 0; i < n; i++)
  {
    int parent;
    cin >> parent;

    if (parent == -1)
      root = i;
    else
      graph[parent].push_back(i);
  }

  int target, answer;
  cin >> target;
  visited[target] = true;

  if (target == root)
  {
    cout << 0 << endl;

    return 0;
  }

  leaf_checker(visited, graph, target);
  answer = dfs(visited, graph, root);

  cout << answer << endl;

  return 0;
}
