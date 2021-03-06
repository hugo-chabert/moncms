<?php
namespace MailPoetVendor\Symfony\Component\DependencyInjection;
if (!defined('ABSPATH')) exit;
class TypedReference extends Reference
{
 private $type;
 private $name;
 private $requiringClass;
 public function __construct(string $id, string $type, $invalidBehavior = ContainerInterface::EXCEPTION_ON_INVALID_REFERENCE, $name = null)
 {
 if (\is_string($invalidBehavior ?? '') || \is_int($name)) {
 @\trigger_error(\sprintf('Passing the $requiringClass as 3rd argument for "%s()" is deprecated since Symfony 4.1. It should be removed, moving all following arguments 1 to the left.', __METHOD__), \E_USER_DEPRECATED);
 $this->requiringClass = $invalidBehavior;
 $invalidBehavior = 3 < \func_num_args() ? \func_get_arg(3) : ContainerInterface::EXCEPTION_ON_INVALID_REFERENCE;
 } else {
 $this->name = $type === $id ? $name : null;
 }
 parent::__construct($id, $invalidBehavior);
 $this->type = $type;
 }
 public function getType()
 {
 return $this->type;
 }
 public function getName() : ?string
 {
 return $this->name;
 }
 public function getRequiringClass()
 {
 @\trigger_error(\sprintf('The "%s()" method is deprecated since Symfony 4.1.', __METHOD__), \E_USER_DEPRECATED);
 return $this->requiringClass ?? '';
 }
 public function canBeAutoregistered()
 {
 @\trigger_error(\sprintf('The "%s()" method is deprecated since Symfony 4.1.', __METHOD__), \E_USER_DEPRECATED);
 return $this->requiringClass && \false !== ($i = \strpos($this->type, '\\')) && 0 === \strncasecmp($this->type, $this->requiringClass, 1 + $i);
 }
}
