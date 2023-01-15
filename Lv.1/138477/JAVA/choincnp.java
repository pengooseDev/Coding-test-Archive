import java.util.*;
class Solution {
    public int[] solution(int k, int[] score) {
        ArrayList<Integer> arr = new ArrayList<>();
        int[] dap = new int[score.length];
        for (int i=0; i<score.length;i++){
            arr.add(score[i]);
            int[] answer = arr.stream().mapToInt(j->j).toArray();
            Arrays.sort(answer);
            if (i<k) dap[i] = answer[0];
            else dap[i] = answer[i-k+1];
        }
        return dap;
    }
}