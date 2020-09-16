package com.fita.fita.email;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;


public class EnviaEmailTLS {
	 public static boolean sendEmail(Mensagem msg) {
		 
		 
		 
		 	Mensagem t = new Mensagem();
		 	t = msg;
		 	
		 	System.out.println(t.getEmail());
		 	
		 	
	        final String username = "feiraoonlinecontato@gmail.com";
	        final String password = "bspsmnxtkwvsyulb";

	        Properties prop = new Properties();
			prop.put("mail.smtp.host", "smtp.gmail.com");
	        prop.put("mail.smtp.port", "587");
	        prop.put("mail.smtp.auth", "true");
	        prop.put("mail.smtp.starttls.enable", "true"); //TLS
	        
	        Session session = Session.getInstance(prop,
	                new javax.mail.Authenticator() {
	                    protected PasswordAuthentication getPasswordAuthentication() {
	                        return new PasswordAuthentication(username, password);
	                    }
	                });
	        try {

	            Message message = new MimeMessage(session);
	            message.setFrom(new InternetAddress("feiraoonlinecontato@gmail.com"));
	            message.setRecipients(
	                    Message.RecipientType.TO,
	                    InternetAddress.parse("feiraoonlinecontato@gmail.com")
	            );
	            message.setSubject(t.getAssunto() + "/");
	            message.setText("Nome: "+t.getNome()+ "\n" +
	            		"Mensagem recebida de: " + t.getEmail()+ "\n Telefone para contato: " + t.getTelefone() +" \n "+
	            		"Descricão do contato: " + t.getMensagem());

	            Transport.send(message);
	            return true;

	        } catch (MessagingException e) {
	            e.printStackTrace();
	            return false;
	        }
	    }
}