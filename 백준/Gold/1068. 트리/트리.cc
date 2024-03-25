#include <iostream>
#include <vector>
using namespace std;

void check(vector<bool> &visited, vector<vector<int>> &graph, int node)
{
  visited[node] = true;
  for (int i : graph[node]) check(visited, graph, i);
}

int dfs(vector<bool> &visited, vector<vector<int>> &graph, int node)
{
  if (visited[node]) return 0;

  int children = 0;
  int leafs = 0;

  for (int i : graph[node])
  {
    children++;
    leafs += dfs(visited, graph, i);
  }

  if (children == 1 && visited[graph[node][0]])
    return 1;

  return leafs > 0 ? leafs : (children == 0 ? 1 : 0);
}

int main()
{
  int r = -1;
  int n;
  cin >> n;
  vector<vector<int>> graph(n);
  vector<bool> visited(n, false);

  for (int i = 0; i < n; i++)
  {
    int parent;
    cin >> parent;

    if (parent == -1) r = i;
    else graph[parent].push_back(i);
  }

  int target, answer;
  cin >> target;
  visited[target] = true;

  if (target == r)
  {
    cout << 0 << endl;
    return 0;
  }

  check(visited, graph, target);
  answer = dfs(visited, graph, r);
  cout << answer << endl;

  return 0;
}