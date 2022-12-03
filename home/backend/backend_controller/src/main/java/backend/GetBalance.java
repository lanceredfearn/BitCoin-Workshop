package backend;

import org.apache.tomcat.jni.Proc;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.Scanner;

@RestController
public class GetBalance {

    String command = "bitcoin-cli " + "--testnet " + "getwalletinfo";

    @PostMapping("/getbalance")
    public Object getBalance() throws IOException {
        String returnWalletBalance = "";
        ProcessBuilder getBalanceCurl = new ProcessBuilder(command.split(" "));
        Process process = getBalanceCurl.start();
        Scanner sc = new Scanner(process.getInputStream());
        System.out.println(command);
        while (sc.hasNext()) {
            returnWalletBalance += sc.nextLine().toString() + "\n";
        }
        return returnWalletBalance;
    }

}
