import java.util.*;
public class twodarrayscurrency {
    public static void main(String[] args){
        int userChoice;
        double amt;
        int userChoiceone;
        
        Scanner scan = new Scanner(System.in);
        System.out.println("What is the Currency?");
        System.out.println("Press 1 for AUD");
        System.out.println("Press 2 for USD");
        System.out.println("Press 3 for Japenese YEN");
        System.out.println("Press 4 for CAD");
        System.out.println("Press 5 for EUR");
        System.out.println("Press 6 for INR");
        userChoice = scan.nextInt();
        System.out.println("How much is there?");
        amt = scan.nextDouble();
        System.out.println("What do you want to convert it to?");
        System.out.println("Press 1 for AUD");
        System.out.println("Press 2 for USD");
        System.out.println("Press 3 for Japenese YEN");
        System.out.println("Press 4 for CAD");
        System.out.println("Press 5 for EUR");
        System.out.println("Press 6 for INR");
        userChoiceone = scan.nextInt();
        scan.close();

        double[][] arr = {
            //AUD, USD, YEN, CAD, EUR, INR
            {amt*1*100.0/100.0, amt*0.70*100.0/100.0, amt*90.25*100.0/100.0, amt*0.93*100.0/100.0, amt*0.64*100.0/100.0, amt*56.38*100.0/100.0},
            {amt*1.44*100.0/100.0, amt*1*100.0/100.0, amt*129.56*100.0/100.0, amt*1.34*100.0/100.0, amt*0.92*100.0/100.0, amt*80.98*100.0/100.0},
            {amt*0.011*100.0/100.0, amt*0.0077*100.0/100.0, amt*1*100.0/100.0, amt*0.010*100.0/100.0, amt*0.0071*100.0/100.0, amt*0.63*100.0/100.0},
            {amt*1.07*100.0/100.0, amt*0.70*100.0/100.0, amt*96.73*100.0/100.0, amt*1*100.0/100.0, amt*0.69*100.0/100.0, amt*60.46*100.0/100.0},
            {amt*1.56*100.0/100.0, amt*1.09*100.0/100.0, amt*140.92*100.0/100.0, amt*1.45*100.0/100.0, amt*1*100.0/100.0, amt*88.08*100.0/100.0},
            {amt*0.018*100.0/100.0, amt*0.012*100.0/100.0, amt*1.6*100.0/100.0, amt*0.017*100.0/100.0, amt*0.011*100.0/100.0, amt*1*100.0/100.0}
        };

        System.out.println(arr[userChoice-1][userChoiceone-1]);        
    }
}