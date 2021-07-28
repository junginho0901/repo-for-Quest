//
//  main.c
//  c programming practice
//
//  Created by 정인호 on 2021/07/27.
//
/*
#include <stdio.h>

int main(int argc, const char * argv[]) {
    // insert code here...
    printf("Hello, World!\n im inho \nC Programming\n");
    return 0;
}
*/

#include<stdio.h>
int main(void)
{
    int first_num=0;
    int second_num=0;
    int third_num=0;
    
    printf("실수를 입력하시오 : ");
    scanf("%d",&first_num);
    
    printf("실수를 입력하시오 : ");
    scanf("%d",&second_num);
    
    printf("실수를 입력하시오 : ");
    scanf("%d",&third_num);
    
    printf("합은 : %d , 평균은 : %d",first_num+second_num+third_num,(first_num+second_num+third_num)/3);
}
