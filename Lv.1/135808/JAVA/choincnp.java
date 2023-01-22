import java.util.Arrays;
class Solution {
    public int solution(int k, int m, int[] score) {
        int answer = 0;
        int box = score.length/m;
        int[] arr = new int[score.length];
        Arrays.sort(score);
        for (int i=0; i<score.length;i++){
            arr[i] = score[score.length-i-1];
        }
        for (int i=0; i<box; i++){
            answer += (arr[i*m+(m-1)])*m;
        }
        return answer;
    }
}