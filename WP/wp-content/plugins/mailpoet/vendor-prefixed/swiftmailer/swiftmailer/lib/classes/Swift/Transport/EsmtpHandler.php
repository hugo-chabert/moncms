<?php
namespace MailPoetVendor;
if (!defined('ABSPATH')) exit;
interface Swift_Transport_EsmtpHandler
{
 public function getHandledKeyword();
 public function setKeywordParams(array $parameters);
 public function afterEhlo(Swift_Transport_SmtpAgent $agent);
 public function getMailParams();
 public function getRcptParams();
 public function onCommand(Swift_Transport_SmtpAgent $agent, $command, $codes = [], &$failedRecipients = null, &$stop = \false);
 public function getPriorityOver($esmtpKeyword);
 public function exposeMixinMethods();
 public function resetState();
}
