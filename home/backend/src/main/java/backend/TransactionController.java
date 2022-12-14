package backend;

import antlr.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.Scanner;

@RestController
@CrossOrigin("*")
public class TransactionController {

    String listTransactions = "bitcoin-cli " + "--testnet " + "listtransactions";
    String getTransactionCmd = "bitcoin-cli " + "--testnet " + "gettransaction";
    String setTransactionFee = "bitcoin-cli " + "--testnet " + "settxfee ";

    @PostMapping("/listtransactions")
    public String getTransactionList() throws IOException {

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

    @PostMapping("/gettransaction")
    public String getTransaction(@RequestBody String txid) throws IOException {

        String getTransaction = getTransactionCmd + " " + txid.substring(0, txid.length() - 1);
        String returnTransaction = "";

        ProcessBuilder getBalanceCurl = new ProcessBuilder(getTransaction.split(" "));
        Process process = getBalanceCurl.start();

        Scanner sc = new Scanner(process.getInputStream());
        System.out.println(getTransaction);

        while (sc.hasNext()) {
            returnTransaction += sc.nextLine().toString();
        }

        return returnTransaction;
    }

    @PostMapping("/settransactionfee")
    public String setTransactionFee(@RequestBody String amount) throws IOException {

        String setTransactionFeeUpdated = setTransactionFee + amount.substring(0, amount.length() - 1);
        String returnTransaction = "";

        ProcessBuilder getBalanceCurl = new ProcessBuilder(setTransactionFeeUpdated.split(" "));
        Process process = getBalanceCurl.start();

        Scanner sc = new Scanner(process.getInputStream());
        System.out.println(setTransactionFeeUpdated);

        while (sc.hasNext()) {
            returnTransaction += sc.nextLine().toString();
        }

        return returnTransaction;
    }
}
