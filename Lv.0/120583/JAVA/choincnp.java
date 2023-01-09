class Solution {
    public int solution(int[] array, int n) {
        int cnt=0;
        for (int i=0; i<array.length; i++){
            if (array[i]==n) cnt++;
        }
        return cnt;
    }
}