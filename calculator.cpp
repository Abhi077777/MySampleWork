#include<stdio.h>
#include<conio.h>
int mul(int a,int b)
{
	 int r;
	r = a * b;
    return r;
}

int add( int a,int b)
{
    int r;
	r = a + b;
    return r;
}

int sub(int a,int b)
{
	int r;
	r = a - b;
	return r;
}
int div(int a,int b)
{
	int r;
	r = a / b;
	return r;
}
    


int main()

{
	int a,b;
	int choice;
	int result;
	while(1){	
	
	printf("\nEnter 1st Number");
	scanf("%d", &a);
	
	printf("\nEnter  2nd NUmber");
	scanf("%d",&b);
	
	printf("Enter a choice");
	scanf("%d",&choice);
	
	
    printf("\nn1. addition");
	printf("\nn2. multiplication");
	printf("\n3.  divison");
	printf("\n4.  subtraction");
	printf("\nn5. Exit");
	
	
	switch(choice)
	{
		case 1:
			result = add(a,b);
        	printf("\nOn add two no: %d",result);
        	break;
        case 2:
			
			
	        result = mul(a,b);
	        printf("\nOn multiply two no: %d",result);
	        break;
		case 3:
		
		    result = div(a,b);
            printf("\nOn divison two no: %d",result);
            break;
        case 4:
            	
            result = sub(a,b);
	        printf("\nOn subtraction two no: %d",result);
	        break;
	    
	}
	
	
}


	
return 0;
}

 


