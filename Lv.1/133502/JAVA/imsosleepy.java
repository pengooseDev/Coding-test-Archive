import java.util.Stack;

class Solution {
    public int solution(int[] ingredient) {
        int answer = 0;
        Stack<Integer> stack = new Stack<>();
        int breadCount = 0;
        for(int i=0; i<ingredient.length;i++) {
            if(ingredient[i] == 1) {
                breadCount += 1;
            }

            stack.add(ingredient[i]);

            if(stack.size() >= 4 && breadCount/2 > 0) {
                int first = stack.pop();
                int second = stack.pop();
                int third = stack.pop();
                int forth = stack.pop();

                if(first == 1 && second == 3 && third == 2 && forth ==1) {
                    answer++;
                    breadCount = breadCount - 2;
                } else {
                    stack.add(forth);
                    stack.add(third);
                    stack.add(second);
                    stack.add(first);
                }

            }
        }

        return answer;

    }
}