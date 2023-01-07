class Solution {
    public int solution(int[] array, int n) {
        int answer = 0;
        for (int i = 0; i <= array.length -1; i++) {
            if (array[i] == n) {
                answer += 1;
            }
        }

        return answer;
    }
}