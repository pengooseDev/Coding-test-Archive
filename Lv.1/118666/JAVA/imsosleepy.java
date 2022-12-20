class Solution {
    public String solution(String[] survey, int[] choices) {
        String answer = "";
        int[] score = new int[]{-3,-2,-1,0,1,2,3};
        String[] type = new String[]{"RT","CF","JM","AN"};
        String[] reverseType = new String[]{"TR","FC","MJ","NA"};
        int[] result = new int[]{0,0,0,0};

        for(int i =0;i<survey.length;i++) {
            for(int j =0; j< 4 ; j++){
                if(survey[i].equals(type[j])) {
                    result[j] = result[j] + score[choices[i]-1];
                    break;
                }
                if(survey[i].equals(reverseType[j])) {
                    result[j] = result[j] - score[choices[i]-1];
                    break;
                }
            }
        }
        for(int i =0; i<4; i++) {
            String tempAnswer = Character.toString(type[i].charAt(0));
            if(result[i] > 0) {
                tempAnswer = Character.toString(type[i].charAt(1));
            }
            answer = answer + tempAnswer;
        }
        return answer;
    }
}