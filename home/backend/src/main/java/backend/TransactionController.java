package backend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.Scanner;

@RestController
@CrossOrigin("*")
public class TransactionController {

    String listTransactions = "bitcoin-cli " + "--testnet " + "listtransactions";

    @PostMapping("/listtransactions")
    public String getBalance() throws IOException {

        String returnTransactions = "";

        ProcessBuilder getBalanceCurl = new ProcessBuilder(listTransactions.split(" "));
        Process process = getBalanceCurl.start();

        Scanner sc = new Scanner(process.getInputStream());
        System.out.println(listTransactions);

        while (sc.hasNext()) {
            returnTransactions += sc.nextLine().toString();
        }

        return returnTransactions;
    }
}
