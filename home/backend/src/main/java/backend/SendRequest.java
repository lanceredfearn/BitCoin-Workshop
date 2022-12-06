package backend;

public class SendRequest {

    private String sendAddress;
    private String amount;

    public SendRequest(String sendAddress, String amount) {
        this.sendAddress = sendAddress;
        this.amount = amount;
    }

    public String getSendAddress() {
        return sendAddress;
    }

    public void setSendAddress(String sendAddress) {
        this.sendAddress = sendAddress;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }
}
