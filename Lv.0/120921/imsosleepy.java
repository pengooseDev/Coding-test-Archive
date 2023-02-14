class Solution {
    public int solution(String A, String B) {
        boolean same = false;
        int answer = 0;
        if(A.equals(B)){
            answer = 0;
            return answer;
        }

        for(int i=0;i<A.length()-1;i++){
            A = String.valueOf(A.charAt(A.length()-1)) + A.substring(0,A.length()-1);
            if(B.equals(A)) {
                answer = i+1;
                same = true;
                break;
            }
        }


        if(!same) answer = -1;

        return answer;
    }
}