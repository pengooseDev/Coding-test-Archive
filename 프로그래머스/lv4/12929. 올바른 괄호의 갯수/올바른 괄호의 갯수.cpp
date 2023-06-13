#include <string>
#include <vector>
using namespace std;

int solution(int n) {
    vector<long long> ctl(n + 1, 0);
    ctl[0] = 1;
    ctl[1] = 1;
    
    for (int i = 2; i <= n; i++)
        for (int j = 0; j < i; j++)
            ctl[i] = ctl[i] + (ctl[j] * ctl[i - j - 1]);
    
    return ctl[n];
}