package com.example.hello.error;

/**
 * @author magiccrafter
 */
public class ApiErrorResponse {

    private String status;
    private int statusCode;
    private String message;
    private String log;

    public ApiErrorResponse(String status, int statusCode, String message, String log) {
        this.status = status;
        this.statusCode = statusCode;
        this.message = message;        
        this.log = log;

    }

    public String getStatus() {
        return status;
    }

    public int getStatusCode() {
        return statusCode;
    }

    public String getMessage() {
        return message;
    }

    public String getLog() {
        return log;
    }

    @Override
    public String toString() {
        return "ApiErrorResponse{" +
                "status=" + status +
                ", statusCode=" + statusCode +
                ", message=" + message +
                ", statusCode=" + statusCode +
                ", log=" + log +
                '}';
    }
}
