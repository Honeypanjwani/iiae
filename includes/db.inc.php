	<?php
//include_once("config.inc.php");
ini_set('display_errors', '0');
class DB
     {   
			/*
			 var $host="localhost"; 
			 var $user="root";
			 var $pwd="";
			 var $database="iiae";


			*/
 			

						
			public function _DB()
			{
				if (!$con)
				  {
					die('Could not connect: ' . mysqli_error());
				  }
			}
			public function _query($qry)
			{
				$this->conn = mysqli_connect($this->host, $this->user, $this->pwd , $this->database);
				$result = mysqli_query($this->conn, $qry);	
				mysqli_close($this->conn);
				return $result;
				
			}
			
			public function redirect($url, $permanent = false) 
			{
				if($permanent)
					{
						header('HTTP/1.1 301 Moved Permanently');
					}
					header('Location: '.$url);
					exit();
			}
		#-------- Beginning for select count rows from a table like select count(*) from idea ---------

		public function select_count($qry)
		{
			//return $qry;
//			eg: $qry="select count(*) from  student_attendance where Attendance_Date like '%-08-%' && Enrollment_Number = '269-0007'";
			$this->conn = mysqli_connect($this->host, $this->user, $this->pwd , $this->database);
			$result = mysqli_query($this->conn, $qry);	
			$row = mysqli_fetch_array($result);
			return $row[0];			
		}
		
		#-------- End for select count rows from a table like select count(*) from idea ---------				
		
#-------- End for select count rows from a table like select count(*) from idea ---------				
		

		public function clm_value( $column1, $column2, $table, $value)
		{
			
			$qry="select $column1 from $table where  $column2  = '$value'";
			$this->conn = mysqli_connect($this->host, $this->user, $this->pwd , $this->database);
			$result = mysqli_query($this->conn, $qry);	
			
			//return $qry;			
			$row = mysqli_fetch_array($result);
			return $row[0];						
			
		}
		
		public function clm_value_2($col_select, $col_where1, $col_where2, $table, $value1, $value2)
		{
			$qry="select $col_select from $table where  $col_where1 = '$value1' && $col_where2 = '$value2'";
			$this->conn = mysqli_connect($this->host, $this->user, $this->pwd , $this->database);
			$result = mysqli_query($this->conn, $qry);	
			$row = mysqli_fetch_array($result);
			return $row[0];
		}
		public function clm_value_3($col_select, $col_where1, $col_where2, $col_where3, $table, $value1, $value2, $value3)
		{
			$qry="select $col_select from $table where  $col_where1 = '$value1' && $col_where2 = '$value2' && $col_where3 = '$value3'";
			$this->conn = mysqli_connect($this->host, $this->user, $this->pwd , $this->database);
			$result = mysqli_query($this->conn, $qry);	
			$row = mysqli_fetch_array($result);
			return $row[0];
		}	
		public function clm_value_4($col_select, $col_where1, $col_where2, $col_where3, $col_where4, $table, $value1, $value2, $value3, $value4)
		{
		    $qry="select $col_select from $table where  $col_where1 = '$value1' && $col_where2 = '$value2' && $col_where3 = '$value3' && $col_where4 = '$value4'";
			$this->conn = mysqli_connect($this->host, $this->user, $this->pwd , $this->database);
			$result = mysqli_query($this->conn, $qry);	
			$row = mysqli_fetch_array($result);
			return $row[0];
			
		}				
		public function generate_cmb($col_select, $col_where1, $col_where2, $table, $value1, $value2)
		{
			$qry="select $col_select from $table where  $col_where1 = '$value1' && $col_where2 = '$value2'";
			$this->conn = mysqli_connect($this->host, $this->user, $this->pwd , $this->database);
			$result = mysqli_query($this->conn, $qry);	
			
			
			while($row = mysqli_fetch_array($result))
				{
					
					
				}
			$row = mysqli_fetch_array($result);
			return $row[0];
		}
		public function next_id($Id, $table)
		{
			$qry="SELECT $Id, MAX($Id) FROM $table";
			$i=0;
			$this->conn = mysqli_connect($this->host, $this->user, $this->pwd , $this->database);
			$result = mysqli_query($this->conn, $qry);	
			while($rows = mysqli_fetch_array($result))
				{
					$i=1;
					$Id = $rows['MAX('.$Id.')'];
				}	
				if($i==0)
				{
					return("1");
				}
				else
				{
					$Id++;
					return $Id;
				}
		}
	public function _mail($Email_Id, $Name, $Message, $Subject, $Var_Email_Id, $Var_Email_Name,  $Var_Password)
		{
				
				$mail = new PHPMailer();
				
				$mail->IsSMTP();
                $mail->SMTPAuth = true;
          
                $mail->SMTPSecure = 'ssl';
                $mail->Host = 'lnx9.cloudhostdns.net';
                $mail->Port = '465';
                $mail->Encoding = '7bit';
				
				$mail->Username = $Var_Email_Id;
				$mail->Password = $Var_Password;
				
				$mail->SetFrom($Var_Email_Id, $Var_Email_Name);
				$mail->AddReplyTo($Var_Email_Id, $Var_Email_Name);
				//$mail->AddReplyTo($Var_Email_Id, $Var_Email_Name);
				$mail->Subject = $Subject;
				$mail->MsgHTML($Message);
				
				$mail->AddAddress($Email_Id, $Name);			
				//$mail->AddAddress('sanghdeep1988@gmail.com', 'Sangh Deep, A Softwate Developer');
				$result = $mail->Send();
				$mail->ClearAllRecipients();
				unset($mail);

				return($result);

		}
	public function count_classes($Id)
		{
			$qry="SELECT * FROM school where Id = '$Id' limit 1";
			$i=0;
			$this->conn = mysqli_connect($this->host, $this->user, $this->pwd , $this->database);
			$result = mysqli_query($this->conn, $qry);	
			
			while($rows = mysqli_fetch_array($result))
				{
					if($rows['Class_Pre_Primary']==1){$i++;}
					if($rows['Class_Nursery']==1){$i++;}
					if($rows['Class_LKG']==1){$i++;}
					if($rows['Class_UKG']==1){$i++;}
					if($rows['Class_I']==1){$i++;}
					if($rows['Class_II']==1){$i++;}
					if($rows['Class_II']==1){$i++;}
					if($rows['Class_IV']==1){$i++;}
					if($rows['Class_V']==1){$i++;}
					if($rows['Class_VI']==1){$i++;}
					if($rows['Class_VII']==1){$i++;}
					if($rows['Class_VIII']==1){$i++;}
					if($rows['Class_IX']==1){$i++;}
					if($rows['Class_X']==1){$i++;}
					if($rows['Class_XI']==1){$i++;}
					if($rows['Class_XII']==1){$i++;}
				}
				return ($i);
		}
		public function my_remove_array_item( $array, $item ) {
				$index = array_search($item, $array);
				if ( $index !== false ) {
					unset( $array[$index] );
				}
				return $array;
			}			
		public function crypto_rand_secure($min, $max)
			{
			    $range = $max - $min;
			    if ($range < 1) return $min; // not so random...
			    $log = ceil(log($range, 2));
			    $bytes = (int) ($log / 8) + 1; // length in bytes
			    $bits = (int) $log + 1; // length in bits
			    $filter = (int) (1 << $bits) - 1; // set all lower bits to 1
			    do {
			        $rnd = hexdec(bin2hex(openssl_random_pseudo_bytes($bytes)));
			        $rnd = $rnd & $filter; // discard irrelevant bits
			    } while ($rnd >= $range);
			    return $min + $rnd;
			}

		public function getToken($length)
			{
			    $token = "";
			    $codeAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			    $codeAlphabet.= "abcdefghijklmnopqrstuvwxyz";
			    $codeAlphabet.= "0123456789";
			    $max = strlen($codeAlphabet) - 1;
			    for ($i=0; $i < $length; $i++) {
			        $token .= $codeAlphabet[$this->crypto_rand_secure(0, $max)];
			    }
			    return $token;
			}				
		public function _sms($sms,$Mobile)
			{
 					$sms1 = $sms;
					$sms = urlencode($sms);
					//$url = "http://adworldlog.in//api/smsapi.aspx?username=goexam123&password=goexam123&to=$Mobile&from=GOEXAM&message=$sms";
					$url = "http://adworldlog.in/vendorsms/pushsms.aspx?user=iiaedl123&password=priya@125&msisdn=$Mobile&sid=AMECET&msg=$sms&fl=0&gwid=2";
						$ctx = stream_context_create(array(
							'https' => array(
								'timeout' => 1
								)
							)
						);
						file_get_contents($url, 0, $ctx);
						
						// update to database to sent
						$qry = "INSERT INTO sent_sms (Student_Id, SMS, DOC) VALUES ('$Mobile', '$sms1', NOW())";
						$this->conn = mysqli_connect($this->host, $this->user, $this->pwd , $this->database);
						mysqli_query($this->conn, $qry);
						

						return true;
			}
		public function _sms1($sms,$Mobile,$sms_id)
			{
					$sms1 = $sms;
					$sms = urlencode($sms);
					
					//$url = "http://adworldlog.in//api/smsapi.aspx?username=goexam123&password=goexam123&to=$Mobile&from=GOEXAM&message=$sms";
					$url = "http://adworldlog.in/vendorsms/pushsms.aspx?user=iiaedl123&password=priya@125&msisdn=$Mobile&sid=$sms_id&msg=$sms&fl=0&gwid=2";
						$ctx = stream_context_create(array(
							'http' => array(
								'timeout' => 1
								)
							)
						);
						file_get_contents($url, 0, $ctx);
						$qry = "INSERT INTO sent_sms (Student_Id, SMS, DOC) VALUES ('$Mobile', '$sms1', NOW())";
						$this->conn = mysqli_connect($this->host, $this->user, $this->pwd , $this->database);
						mysqli_query($this->conn, $qry);
						return true;
			}
			
		public function is_paid_registered($Mobile1, $Mobile2)
			{
				$qry="select RN from registration_new where (Student_Mobile like '%$Mobile1%' || Parents_Mobile like '%$Mobile1%' || Student_Mobile like '%$Mobile2%' || Parents_Mobile like '%$Mobile2%') && Status = 1";
				$this->conn = mysqli_connect($this->host, $this->user, $this->pwd , $this->database);
				$result = mysqli_query($this->conn, $qry);
				$row = mysqli_fetch_array($result);
				return $row[0];
			}
		public function is_mobile()
			{
				$useragent=$_SERVER['HTTP_USER_AGENT'];
				if(preg_match('/android|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i',$useragent)||preg_match('/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i',substr($useragent,0,4)))
				{
				    return (1);
				}
				else
				{
				    return (0);
				}
			}

		public function format_interval(DateInterval $interval) {
			    $result = "";
			    if ($interval->y) { $result .= $interval->format("%y Y "); }
			    if ($interval->m) { $result .= $interval->format("%m M "); }
			    if ($interval->d) { $result .= $interval->format("%d D "); }
			    if ($interval->h) { $result .= $interval->format("%h Hrs "); }
			    if ($interval->i) { $result .= $interval->format("%i Min "); }
			    if ($interval->s) { $result .= $interval->format("%s Sec "); }

			    return $result;
			}
      }
