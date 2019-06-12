import { Construct, IConstruct } from './construct';
import { PhysicalName } from './physical-name';

/**
 * Interface for the Resource construct.
 */
export interface IResource extends IConstruct {
  /**
   * The physical (that is, visible in the AWS Console) name of this resource.
   */
  readonly physicalName: PhysicalName;
}

/**
 * Construction properties for {@link Resource}.
 */
export interface ResourceProps {
  /**
   * The physical (that is, visible in the AWS Console) name of this resource.
   * By default, the name will be automatically generated by CloudFormation,
   * at deploy time.
   *
   * @default PhysicalName.auto()
   */
  readonly physicalName?: PhysicalName;
}

/**
 * A construct which represents an AWS resource.
 */
export abstract class Resource extends Construct implements IResource {
  public readonly physicalName: PhysicalName;

  constructor(scope: Construct, id: string, props: ResourceProps = {}) {
    super(scope, id);

    this.physicalName = props.physicalName || PhysicalName.auto();
  }
}