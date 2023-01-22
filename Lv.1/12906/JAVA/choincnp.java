import java.util.*;
public class Solution {
    public Stack solution(int[] arr) {
        Stack answer = new Stack();
        int fin = 0;
        for (int i : arr){
            if (answer.isEmpty()){
                answer.push(i);
                fin = i;
            }
            else if (fin!=i){
                answer.push(i);
                fin = i;
            }
        }
        return answer;
    }
}