import java.util.ArrayList;
import java.util.PriorityQueue;

class Solution {
    public int[] solution(int k, int[] score) {
       PriorityQueue<Integer> pq = new PriorityQueue<>();
        ArrayList<Integer> answerList = new ArrayList<>();
        for(int i=0;i<score.length;i++) {
            if(pq.size() == k) {
                if(pq.peek() < score[i]) {
                    pq.poll();
                    pq.add(score[i]);
                }
            } else {
                pq.add(score[i]);
            }
            answerList.add(pq.peek());
        }
        int[] answer = answerList.stream().mapToInt(i -> i).toArray();

        return answer;
    }
}