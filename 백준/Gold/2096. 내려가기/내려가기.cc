#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    int N;
    cin >> N;
    
    vector<int> dpMin(3), dpMax(3);
    for (int i = 0; i < 3; i++) {
        cin >> dpMin[i];
        dpMax[i] = dpMin[i];
    }
    
    for (int i = 1; i < N; i++) {
        int x, y, z;
        cin >> x >> y >> z;
        
        vector<int> newMin(3), newMax(3);
        
        newMax[0] = max(dpMax[0] + x, dpMax[1] + x);
        newMax[1] = max({dpMax[0] + y, dpMax[1] + y, dpMax[2] + y});
        newMax[2] = max(dpMax[1] + z, dpMax[2] + z);

        newMin[0] = min(dpMin[0] + x, dpMin[1] + x);
        newMin[1] = min({dpMin[0] + y, dpMin[1] + y, dpMin[2] + y});
        newMin[2] = min(dpMin[1] + z, dpMin[2] + z);

        dpMax = newMax;
        dpMin = newMin;
    }
    
    int max_val = *max_element(dpMax.begin(), dpMax.end());
    int min_val = *min_element(dpMin.begin(), dpMin.end());
    
    cout << max_val << " " << min_val << "\n";

    return 0;
}
