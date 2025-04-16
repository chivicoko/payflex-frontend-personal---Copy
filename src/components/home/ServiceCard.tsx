import { ArrowRightAlt } from "@mui/icons-material";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: OverridableComponent<SvgIconTypeMap<object, "svg">> & { muiName: string; };
  color: string;
  className?: string;
}

const ServiceCard = ({ title, description, icon: Icon, color, className }: ServiceCardProps) => {
  return (
    <div 
      className={`rounded-2xl p-6 transition-all duration-300 bg-gradient-to-br from-white to-gray-50 shadow-card hover:card-hover group ${className}`}>
      <div 
        className={`inline-flex items-center justify-center p-3 rounded-xl mb-4 ${color === 'primary' ? 'bg-primary/10' : 'bg-fintech/10'}`}>
        <Icon className={`size-6 ${color === 'primary' ? 'text-primary' : 'text-fintech'}`} />
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="flex items-center text-primary font-medium">
        <span>Learn more</span>
        <span className="ml-1 group-hover:translate-x-2 group-hover:-rotate-45 transition-all duration-500">
          <ArrowRightAlt />
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
