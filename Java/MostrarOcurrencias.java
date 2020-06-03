//Autor Kristel Guzman Venegas
import java.util.*;

public class MostrarOcurrencias {
    public static void main(String[] args) throws Exception {
  
        int[] myArray = {1,2,2,5,4,6,7,8,8,8};
        int number = 0;
        int highNumber = 0;
        Arrays.sort(myArray);
        int cont=0;
        int aux=myArray[0];
        for (int i = 0; i < myArray.length; i++) {
            if(aux == myArray[i]){
                cont++;
            } else {
               if(cont >= number){
                   number = cont;
                   highNumber = myArray[aux];
               }
                cont = 1;
                aux=myArray[i];
            }
        }
        if(cont >= number){
            number = cont;
            highNumber = myArray[myArray.length -1];
        }
        System.out.print("Ocurrencias " + number  + "\nNúmero " + highNumber);

    }
}
