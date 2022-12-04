package backend;

import org.apache.tomcat.jni.Proc;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.io.IOException;
import java.util.Scanner;

@RestController
@CrossOrigin("*")
public class GetBalance {

    String getWalletInfo = "bitcoin-cli " + "--testnet " + "getwalletinfo";
    String getNewAddress = "bitcoin-cli " + "--testnet " + "getnewaddress";

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
}
