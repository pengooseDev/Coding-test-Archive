import java.util.*;
import java.util.stream.Collectors;
class Solution {
    public int[] solution(int[][] score) {
        int[] score1 = new int[score.length];
        for (int i=0; i<score.length; i++){
            score1[i] = score[i][0]+score[i][1];
        }
        int[] answer = new int[score1.length];
        List<Integer> score2 = Arrays.stream(score1).sorted().boxed().collect(Collectors.toList());
        Collections.reverse(score2);
        for (int i= 0; i<score1.length; i++){
            answer[i] = score2.indexOf(score1[i])+1;
        }
        return answer;
    }
}