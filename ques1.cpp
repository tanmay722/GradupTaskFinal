#include <bits/stdc++.h>
using namespace std;

const long long INF = 4e18;

vector<vector<int>> memo(1e4 + 1, vector<int>(1e4 + 1, -1));

int findMinCost(int start, int end, int substituteCost, int removeCost, string &source, string &target, string &targetReversed) {
    if (start > end) return 0;
    if (memo[start][end] != -1) return memo[start][end];

    int minCost = 1e9;
    for (int k = start; k <= end; k++) {
        if (targetReversed.find(source.substr(start, k - start + 1)) != string::npos) 
            minCost = min(minCost, removeCost + findMinCost(k + 1, end, substituteCost, removeCost, source, target, targetReversed));
        if (target.find(source.substr(start, k - start + 1)) != string::npos) 
            minCost = min(minCost, substituteCost + findMinCost(k + 1, end, substituteCost, removeCost, source, target, targetReversed));
    }

    return memo[start][end] = minCost;
}

int calculateMinCost(int substituteCost, int removeCost, string sourceStr, string targetStr) {
    string reversedTarget = targetStr;
    reverse(reversedTarget.begin(), reversedTarget.end());
    return findMinCost(0, static_cast<int>(sourceStr.size()) - 1, substituteCost, removeCost, sourceStr, targetStr, reversedTarget);
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    string sourceStr, targetStr;
    cin >> sourceStr >> targetStr;
    int substituteCost, removeCost;
    cin >> substituteCost >> removeCost;
    int result = calculateMinCost(substituteCost, removeCost, sourceStr, targetStr);
    cout << result;

    return 0;
}
