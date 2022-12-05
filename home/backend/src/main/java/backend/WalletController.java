package backend;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.io.IOException;
import java.util.Scanner;

@RestController
@CrossOrigin("*")
public class WalletController {

    String getWalletInfo = "bitcoin-cli " + "--testnet " + "getwalletinfo";
    String getNewAddress = "bitcoin-cli " + "--testnet " + "getnewaddress";
    String listReceivedByAddress = "bitcoin-cli " + "--testnet " + "listreceivedbyaddress " + "0 " + "true";

    @PostMapping("/getbalance")
    public String getBalance() throws IOException {

        String returnWalletBalance = "";

        ProcessBuilder getBalanceCurl = new ProcessBuilder(getWalletInfo.split(" "));
        Process process = getBalanceCurl.start();

        Scanner sc = new Scanner(process.getInputStream());
        System.out.println(getWalletInfo);

        while (sc.hasNext()) {
            returnWalletBalance += sc.nextLine().toString();
        }

        return returnWalletBalance;
    }

    @PostMapping("/getnewaddress")
    public Object getNewAddress() throws IOException {

        String returnNewAddress = "";

        ProcessBuilder newAddress = new ProcessBuilder(getNewAddress.split(" "));
        Process process = newAddress.start();

        Scanner sc = new Scanner(process.getInputStream());
        System.out.println(getNewAddress);

        while (sc.hasNext()) {
            returnNewAddress += sc.nextLine().toString();
        }

        return returnNewAddress;
    }

    @PostMapping("/receivedbyaddress")
    public Object receivedByAddress() throws IOException {

        String returnAllAddresses = "";

        ProcessBuilder listReceived = new ProcessBuilder(listReceivedByAddress.split(" "));
        Process process = listReceived.start();

        Scanner sc = new Scanner(process.getInputStream());
        System.out.println(listReceivedByAddress);

        while (sc.hasNext()) {
            returnAllAddresses += sc.nextLine().toString();
        }

        return returnAllAddresses;
    }

}
