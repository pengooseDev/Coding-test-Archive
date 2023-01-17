import java.util.*;
import java.util.stream.Collectors;

class Solution {
    public int solution(String[] babbling) {
        int answer = 0;
        String[] answerList = new String[]{"aya", "ye", "woo", "ma"};
        String[] switchingArray = new String[]{"1","11","111","1111"};
        List<String> switchingList = Arrays.stream(switchingArray).collect(Collectors.toList());
        for(int i =0;i<babbling.length;i++) {
            for(int j=0;j< answerList.length;j++) {
                babbling[i] = babbling[i].replace(answerList[j],"1");
            }
        }

        for(int i = 0 ; i< babbling.length;i++) {
            if(switchingList.contains(babbling[i])){
                answer++;
            }
        }

        return answer;
    }
}